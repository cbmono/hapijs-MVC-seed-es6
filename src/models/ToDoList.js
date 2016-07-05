import { BaseModelRDMS } from './BaseModel.RDMS';
import { ToDo } from './ToDo';


//
// ToDo Lists
//
export class ToDoList extends BaseModelRDMS {

  /**
   * Constructor
   */
  constructor() {
    const tableName = 'todo_lists';
    super( tableName );

    this.ToDo = new ToDo();
  }

  /**
   * Find a specific ToDo list and all its ToDo's
   *
   * @param {integer} id
   * @return {promise}
   *         Contains an array with the ToDo List object and its ToDo's
   */
  findByIdWithToDos( id ) {
    return this.findById( id ).then( ( response ) => {
      if ( response.length ) {
        const responeArray = [...response];
        return this.ToDo.findBy( 'todo_list_id', id ).then( todos => {
          responeArray[ 0 ].todos = todos;
          return responeArray;
        } );
      }

      return response;
    } );
  }
}
