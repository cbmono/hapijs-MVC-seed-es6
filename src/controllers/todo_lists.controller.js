import { ToDoList } from '../models/ToDoList';
import { BaseController } from './base.controller';


//
// Controller for ToDo lists
//
export class ToDoListsController extends BaseController {

  /**
   * Constructor
   */
  constructor() {
    const notFoundMsg = 'ToDo List not found';

    super( notFoundMsg );
    this.ToDoList = new ToDoList();
  }

  /**
   * Retrieve the list of all ToDo lists
   */
  index( request, reply ) {
    this.ToDoList.findAll()
      .then( ( response ) => reply( response ) )
      .catch( ( err ) => reply( this.Boom.wrap( err ) ) );
  }

  /**
   * Retrieve a single ToDo list
   */
  view( request, reply ) {
    const id = request.params.id;

    this.ToDoList.findById( id )
      .then( ( response ) => this.replyOnResponse( response, reply ) )
      .catch( ( err ) => reply( this.Boom.wrap( err ) ) );
  }

  /**
   * Retrieve a single ToDo list and all its ToDo's
   */
  viewAll( request, reply ) {
    const id = request.params.id;

    this.ToDoList.findByIdWithToDos( id )
      .then( ( response ) => this.replyOnResponse( response, reply ) )
      .catch( ( err ) => reply( this.Boom.wrap( err ) ) );
  }

  /**
   * Create a new ToDo list
   */
  create( request, reply ) {
    const data = request.payload;

    this.ToDoList.save( data )
      .then( ( response ) => reply( response ) )
      .catch( ( err ) => reply( this.Boom.wrap( err ) ) );
  }

  /**
   * Update an existing ToDo list
   */
  update( request, reply ) {
    const id = request.params.id;
    const data = request.payload;

    this.ToDoList.update( id, data )
      .then( ( response ) => this.replyOnResponse( response, reply ) )
      .catch( ( err ) => reply( this.Boom.wrap( err ) ) );
  }

  /**
   * Delete a ToDo list
   */
  remove( request, reply ) {
    const id = request.params.id;

    this.ToDoList.del( id )
      .then( ( response ) => this.replyOnResponse( response, reply ) )
      .catch( ( err ) => reply( this.Boom.wrap( err ) ) );
  }
}
