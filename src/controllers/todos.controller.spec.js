import { ToDosController } from './todos.controller';


//
// Tests
//
describe( 'Controller: ToDo\'s ', () => {
    let controller;
    const id = 1;
    const request = { params : { id } };

    beforeEach( () => {
        controller = new ToDosController();

        [
            'findAll',
            'findById',
            'save',
            'update',
            'del',
        ].forEach( f => spyOn( controller.ToDoList, f ).and.returnValue( Promise.resolve( {} ) ) );
    } );

    it( 'should be defined and inherit from BaseController', () => {
        expect( controller ).not.toBeUndefined();
        expect( controller.Boom ).not.toBeUndefined();
    } );

    it( 'should expose index()', () => {
        controller.index();
        expect( controller.ToDo.findAll ).toHaveBeenCalled();
    } );

    it( 'should expose view()', () => {
        controller.view( request );
        expect( controller.ToDo.findById ).toHaveBeenCalledWith( id );
    } );

    it( 'should expose create()', () => {
        const payload = { name : 'New Todo' };
        const rqst = { payload };

        controller.create( rqst );
        expect( controller.ToDo.save ).toHaveBeenCalledWith( payload );
    } );

    it( 'should expose update()', () => {
        const payload = { name : 'Updated ToDo' };
        const rqst = { ...request, payload };

        controller.update( rqst );
        expect( controller.ToDo.update ).toHaveBeenCalledWith( id, payload );
    } );

    it( 'should expose remove()', () => {
        controller.remove( request );
        expect( controller.ToDo.del ).toHaveBeenCalledWith( id );
    } );
} );
