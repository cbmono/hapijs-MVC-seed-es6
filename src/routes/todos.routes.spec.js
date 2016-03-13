import { assertRoutes } from '../../tests/helpers';
import * as routes from './todos.routes';


//
// Tests
//
describe( 'Routes: ToDos', () => {
    const base = '/todos';

    it( 'should expose GET /todos', () => {
        const method = 'GET';

        assertRoutes( routes.default, base, method );
    } );

    it( 'should expose GET /todos/{id}', () => {
        const path = `${base}/{id}`;
        const method = 'GET';

        assertRoutes( routes.default, path, method, true );
    } );

    it( 'should expose POST /todos', () => {
        const method = 'POST';

        assertRoutes( routes.default, base, method, false, true );
    } );

    it( 'should expose PUT /todos/{id}', () => {
        const path = `${base}/{id}`;
        const method = 'PUT';

        assertRoutes( routes.default, path, method, true, true );
    } );

    it( 'should expose DELETE /todos/{1}', () => {
        const path = `${base}/{id}`;
        const method = 'DELETE';

        assertRoutes( routes.default, path, method, true );
    } );
} );
