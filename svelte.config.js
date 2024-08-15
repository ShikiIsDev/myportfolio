import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      strict: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/myportfolio' : ''
    }
  }
};
