podTemplate(cloud:'local cluster', label: '${projectName}', name:'${projectName}',
    containers: [
        containerTemplate(
            name: 'jnlp',
            image: 'TODO CONTAINER IMAGE LINK',
            workingDir: '/root/',
            resourceLimitMemory: '3Gi',
            resourceRequestMemory: '3Gi',
            resourceLimitCpu: '1',
            resourceRequestCpu: '1',
            args: '${computer.jnlpmac} ${computer.name}',
            alwaysPullImage: true
        ),
    ],
    volumes: [
        hostPathVolume(mountPath: '/usr/bin/docker', hostPath: '/usr/bin/docker'),
        hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
    ]
) {
    node('${projectName}') {
        stage("Checkout") {
            checkout([
                $class: 'GitSCM',
                branches: scm.branches,
                doGenerateSubmoduleConfigurations: false,
                extensions: scm.extensions + [
                    [
                        $class: 'CloneOption',
                        depth: 0,
                        noTags: false,
                        shallow: true
                    ]
                ],
                submoduleCfg: [],
                userRemoteConfigs: scm.userRemoteConfigs
            ])
        }

        commit = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()

        stage('install') {
            sh("yarn install")
        }

        stage('lint') {
            sh("yarn run lint")
        }

        stage('test') {
            sh("yarn test")
        }

        if (env.BRANCH_NAME.equals("master")) {
            stage('build') {
                sh("yarn run build")
            }
        }

        stage("deploy") {
            if (env.BRANCH_NAME.equals("master")) {
                sh("NODE_ENV=production yarn run deploy")
                build(job: '${projectName}-release', parameters: [string(name: 'SCOUT_HASH', value: commit)])
            } else {
                sh("yarn run deploy")
            }
        }
    }
}
