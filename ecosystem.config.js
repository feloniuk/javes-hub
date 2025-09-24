module.exports = {
    apps: [{
      name: 'javes',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/javes',
      node_args: '--max-old-space-size=1500'
    }]
  }