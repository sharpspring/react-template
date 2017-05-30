node('k8s') {
    stage("Checkout") {
        checkout scm
    }

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
            sh("NODE_ENV=production yarn run build-scout")
            sh("NODE_ENV=production yarn run deploy-scout")
        } else {
            sh("yarn run deploy")
        }
    }

    /* Uncomment this if you want code coverage reports on PRs
    if (env.BRANCH_NAME.startsWith("PR-")) {
        stage("coverage") {
            sh("find . -name 'coverage.json' -exec rm {} \\;")
            currentBuild.result = 'SUCCESS'
            step([$class: 'MasterCoverageAction'])
            step([$class: 'CompareCoverageAction'])
        }
    }*/
}
