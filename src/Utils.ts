import moment from "moment";

export async function ERR(err: any, res: any = null) {
    ConsoleError(" ")
    ConsoleError("  ______ _____  _____   ____  _____  ");
    ConsoleError(" |  ____|  __ \\|  __ \\ / __ \\|  __ \\ ");
    ConsoleError(" | |__  | |__) | |__) | |  | | |__) |");
    ConsoleError(" |  __| |  _  /|  _  /| |  | |  _  / ");
    ConsoleError(" | |____| | \\ \\| | \\ \\| |__| | | \\ \\ ");
    ConsoleError(" |______|_|  \\_\\_|  \\_\\\\____/|_|  \\_\\");
    ConsoleError(" ")

    if (err != null) {
        ConsoleError(err)
    } else {
        ConsoleError("An unhandled error has occurred!")
    }

    if (res != null) {
        res.sendStatus(500)
    }
}

export async function ConsoleLog(message: any) {
    console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss:ms")}] ${message}`);
}

export async function ConsoleError(message: any) {
    console.error(`[${moment().format("DD-MM-YYYY HH:mm:ss:ms")}] ${message}`);
}