export default function* dynamicCountGenerator(val) {
    let count = 1;
    while (count <= val) {
      yield count++;
    }
  }
  
  const count = 5;
  const gen = dynamicCountGenerator(count);
  
  for (let i=0; i < count; i++) {
    console.log(gen.next());
  }
  