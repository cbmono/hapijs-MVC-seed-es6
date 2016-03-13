import { assertRoutes } from '../../tests/helpers';
import * as routes from './todo_lists.routes';


//
// Tests
//
describe( 'Routes: ToDo Lists', () => {
    const base = '/todo-lists';

    it( 'should expose GET /todo-lists', () => {
        const method = 'GET';

        assertRoutes( routes.default, base, method );
    } );

    it( 'should expose GET /todo-lists/{id}', () => {
        const path = `${base}/{id}`;
        const method = 'GET';

        assertRoutes( routes.default, path, method, true );
    } );

    it( 'should expose GET /todo-lists/{id}/todos', () => {
        const path = `${base}/{id}/todos`;
        const method = 'GET';

        assertRoutes( routes.default, path, method, true );
    } );

    it( 'should expose POST /todo-lists', () => {
        const method = 'POST';

        assertRoutes( routes.default, base, method, false, true );
    } );

    it( 'should expose PUT /todo-lists/{id}', () => {
        const path = `${base}/{id}`;
        const method = 'PUT';

        assertRoutes( routes.default, path, method, true, true );
    } );

    it( 'should expose DELETE /todo-lists/{1}', () => {
        const path = `${base}/{id}`;
        const method = 'DELETE';

        assertRoutes( routes.default, path, method, true );
    } );
} );
