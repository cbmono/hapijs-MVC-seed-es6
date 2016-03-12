import { ToDoListsController } from './todo_lists.controller';

//
// Tests
//
describe( 'Controller: ToDo Lists', () => {
    let controller;
    const id = 1;
    const request = { params : { id } };

    beforeEach( () => {
        controller = new ToDoListsController();

        [ 'findAll', 'findById', 'findByIdWithToDos', 'save', 'update', 'del' ].forEach( f => {
            spyOn( controller.ToDoList, f ).and.returnValue( Promise.resolve( {} ) );
        } );
    } );

    it( 'should be defined and inherit from BaseController', () => {
        expect( controller ).not.toBeUndefined();
        expect( controller.Boom ).not.toBeUndefined();
    } );

    it( 'should expose index()', () => {
        controller.index();
        expect( controller.ToDoList.findAll ).toHaveBeenCalled();
    } );

    it( 'should expose view()', () => {
        controller.view( request );
        expect( controller.ToDoList.findById ).toHaveBeenCalledWith( id );
    } );

    it( 'should expose viewAll()', () => {
        controller.viewAll( request );
        expect( controller.ToDoList.findByIdWithToDos ).toHaveBeenCalledWith( id );
    } );

    it( 'should expose create()', () => {
        const payload = { name : 'New ToDo List' };
        const rqst = { payload };

        controller.create( rqst );
        expect( controller.ToDoList.save ).toHaveBeenCalledWith( payload );
    } );

    it( 'should expose update()', () => {
        const payload = { name : 'Updated ToDo List' };
        const rqst = { ...request, payload };

        controller.update( rqst );
        expect( controller.ToDoList.update ).toHaveBeenCalledWith( id, payload );
    } );

    it( 'should expose remove()', () => {
        controller.remove( request );
        expect( controller.ToDoList.del ).toHaveBeenCalledWith( id );
    } );
} );
