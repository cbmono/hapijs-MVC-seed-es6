import { assertRoutes } from '../../tests/helpers';
import * as routes from './main.routes';
import find from 'lodash/find';


//
// Tests
//
describe( 'Routes: Main', () => {

    const method = 'GET';

    it( 'should expose GET /healthcheck', () => {
        const path = '/healthcheck';

        assertRoutes( routes.default, path, method );
    } );

    it( 'should expose GET /{param*}', () => {
        const path = '/{param*}';
        const route = find( routes.default, { path, method } );

        expect( route.path ).toBe( path );
        expect( route.method ).toBe( method );
        expect( route.config.handler.directory.path ).toBe( './public' );
    } );
} );
