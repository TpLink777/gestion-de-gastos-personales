const { sequelize } = require("./config");

(async () => {
    try {
        console.log("⏳ Conectando a la base de datos...");
        await sequelize.authenticate();
        console.log("✅ Conexión establecida.");

        await sequelize.sync();
        console.log("✅ Modelos sincronizados.");

    } catch (err) {
        console.error("❌ Error al sincronizar los modelos:", err);
    }
})();