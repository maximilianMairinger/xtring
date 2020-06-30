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

  }
  
}
