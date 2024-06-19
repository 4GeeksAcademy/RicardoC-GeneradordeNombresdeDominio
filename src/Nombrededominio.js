let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = [".com", ".net", ".org", ".us", ".io"];

for (const p of pronoun) {
    for (const a of adj) {
        for (const n of noun) {
            for (const e of extensions) {
                console.log(p + a + n  + e);
            }
        }
    }
}
