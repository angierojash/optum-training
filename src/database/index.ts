import "reflect-metadata";
import { Product } from "src/models/Product";
import { DataSource } from "typeorm";

 const myDataSource = new DataSource({
    type: "mongodb",
    url: "",
    database: "optumtraining",
    entities: [Product]
})

myDataSource.initialize()
 .then(() => {
    console.log("Data Source has been initialized")
 })

 export const getDataSource = (delay = 3000): Promise<DataSource> => {
    if (myDataSource.isInitialized) return Promise.resolve(myDataSource);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (myDataSource.isInitialized) resolve(myDataSource);
        else reject("Failed to create connection with database");
      }, delay);
    });
  };

