import { Colors } from 'styleguide';

export default {
  display: 'flex',
  flex: '1',
  height: '100%',
  flexDirection: 'column',
  backgroundColor: Colors.lightGrey,
  backgroundImage: `linear-gradient(to top, ${Colors.lightGrey}, #fff)`,
  content: {
    background: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    margin: '0 auto auto',
    position: 'relative',
  },
  logo: {
    height: '100px',
    width: '400px',
    alignSelf: 'center',
    margin: '30px auto 15px',
  },
  copyright: {
    margin: '5px 0',
  },
};
