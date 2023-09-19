export const core = () => {
    return "core";
}

/**
 * Logs the message and converts it to uppercase.
 * @param message
 */
export const logMessageUppercase = (message: string) => {
    console.log(`Uppercase: ${message.toUpperCase()}`);
}

export const logMessageLowercase = (message: string) => {
    console.log(`Lowercase: ${message.toUpperCase()}`);
}
