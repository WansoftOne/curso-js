async function miPromesa() {
    try {
        const result = await miPromesa2();
        const result2 = await miPromesa2();
        const result3 = await miPromesa2();
        const result4 = await miPromesa2();
        const result5 = await miPromesa2();
    
        console.log(`resultado de miPromesa2 en miPromesa: ${result}`);
    } catch (error) {
        console.error("Error encontrado el llamar miPromesa2", error);
        throw error;
    }
    
    return "Hola carmen";
}

function miPromesa2() {
    return new Promise((resolve, reject) => {
        miPromesa()
            .then((result) => {
                console.log(`resultado de miPromesa2 en miPromesa: ${result}`);
                miPromesa()
                .then((result) => {
                    console.log(`resultado de miPromesa2 en miPromesa: ${result}`);
                    miPromesa()
                    .then((result) => {
                        console.log(`resultado de miPromesa2 en miPromesa: ${result}`);
                        miPromesa()
                        .then((result) => {
                            console.log(`resultado de miPromesa2 en miPromesa: ${result}`);
                            resolve("Hola carmen");
                        }).catch((error) => {
                            console.error("Error encontrado el llamar miPromesa2", error);
                            reject(error)
                        });
                    }).catch((error) => {
                        console.error("Error encontrado el llamar miPromesa2", error);
                        reject(error)
                    });
                }).catch((error) => {
                    console.error("Error encontrado el llamar miPromesa2", error);
                    reject(error)
                });
            }).catch((error) => {
                console.error("Error encontrado el llamar miPromesa2", error);
                reject(error)
            });
    });
}

console.log("iniciar");
miPromesa().then((resultado) => {
    console.log(`resultado de miPromesa: ${resultado}`);
});

miPromesa2().then((resultado) => {
    console.log(`resultado de miPromesa2: ${resultado}`);
});
console.log("fin");