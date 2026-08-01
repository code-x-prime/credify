module.exports = {
    apps: [
        {
            name: "credify",
            script: "npm",
            args: "start",
            cwd: "/root/credify",
            env: {
                NODE_ENV: "production",
                PORT: 7010
            }
        }
    ]
};