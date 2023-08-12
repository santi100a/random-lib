/**
 * Generates a pseudo-random UUID v4.
 */
declare function randomUUID(): string;
declare namespace randomUUID {
    var randomUUID: typeof import("./random-uuid");
}
export = randomUUID;
