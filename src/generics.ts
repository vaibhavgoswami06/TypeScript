interface Datastore<T> {
  additem(): void;
  getitem(): T;
  removeitem(): void;
  additems(): void;
  getitems(): T;
}
interface User {
  id: number;
  name: string;
}

class DataStore<T> implements DataStore<T> {
  private items: T[] = [];

  additem(data: T) {
    this.items.push(data);
  }
  getitem(index: number): T {
    return this.items[index];
  }
  removeitem(index: number) {
    this.items.splice(index, 1);
  }
  additems(...T: T[]) {
    T.forEach((e) => {
      console.log(`Adding item ${e}`);
      this.items.push(e);
    });
  }
  getitems(): T[] {
    return this.items;
  }
}

const dataStore: DataStore<User> = new DataStore<User>();
let randomGenerate = () => Math.floor(Math.random() * 10);

dataStore.additem({ id: randomGenerate(), name: "rakesh" });
dataStore.additem({ id: randomGenerate(), name: "ramesh" });
dataStore.additems(
  { id: randomGenerate(), name: "rakesh" },
  { id: randomGenerate(), name: "rakesh" },
  { id: randomGenerate(), name: "rakesh" }
);

console.log(dataStore.getitems());
