import { constructApplyToPrototype } from "attatch-to-prototype"

export default function(StringConstructor: { new(...a: any): String } = String) {
  const as = constructApplyToPrototype(StringConstructor.prototype)

  as("splice", function(index: number, count: number, ...add: string[]) {
    if (index < 0) {
      index += this.length;
      if (index < 0)
        index = 0;
    }
    return this.slice(0, index) + (add.join("") || "") + this.slice(index + count);
  })

  as("capitalize", function() {
    return this[0].toUpperCase() + this.slice(1);
  })
}