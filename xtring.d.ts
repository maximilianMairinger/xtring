export default function(Xtring?: { new(a: any): String }): void;


declare global {
  
  interface String {
    /**
     * Similar to Array#splice
     * @param index Start index
     * @param count Count to be deleted
     * @param add add after deletion
     */
    splice(index: number, count: number, ...add: string[]): string

    /**
     * Capitalizes the first letter of this string
     */
    capitalize(): string

    /**
     * True when all characters are uppercase
     */
    isUpperCase(): boolean

    /**
     * True when all characters are lowercase
     */
    isLowerCase(): boolean

    /**
     * True when at least one character is uppercase
     */
    hasUpperCase(): boolean

    /**
     * True when at least one character is lowercase
     */
    hasLowerCase(): boolean

  }
  
}
