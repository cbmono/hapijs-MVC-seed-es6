import { ToDo } from './ToDo';


//
// Tests
//
describe( 'Model: ToDo', () => {
    let model;

    beforeEach( () => {
        model = new ToDo();
    } );

    it( 'should be defined and inherit from BaseModelRDMS', () => {
        expect( model ).not.toBeUndefined();
        expect( model.Knex ).not.toBeUndefined();
    } );

    it( 'should have the correct DB table name', () => {
        expect( model.tableName ).toBe( 'todos' );
    } );
} );
