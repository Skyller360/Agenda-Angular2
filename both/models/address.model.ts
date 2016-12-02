import { CollectionObject } from './collection-object.model';

export interface Address extends CollectionObject {
  firstName: string;
  lastName: string;
  mail: string;
  country: string;
}
