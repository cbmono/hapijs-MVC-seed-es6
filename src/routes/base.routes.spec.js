import { BaseRoutes } from './base.routes';


//
// Tests
//
describe( 'Routes: Base', () => {
    let routes;
    const endpoint = 'my-endpoint';
    const controller = new class MockedController {
        index() {}

        view() {}

        create() {}

        update() {}

        remove() {}
    };

    beforeEach( () => {
        routes = new BaseRoutes( controller, endpoint );
    } );

    it( 'should be defined', () => {
        expect( routes ).not.toBeUndefined();
        expect( routes.joi ).not.toBeUndefined();
        expect( routes.endpoint ).toBe( endpoint );
        expect( routes.controller ).not.toBeUndefined();
    } );

    it( 'should throw on empty controller', () => {
        try {
            new BaseRoutes()
        }
        catch ( exc ) {
            expect( exc.name ).toBe( 'Error' );
            expect( exc.message ).toBe( 'BaseRoute: controller is undefined' );
        }
    } );

    it( 'should expose index()', () => {
        const options = routes.index();

        expect( options.method ).toBe( 'GET' );
        expect( options.path ).toBe( routes.endpoint );
        expect( options.config.handler ).not.toBeUndefined();
    } );

    it( 'should expose view()', () => {
        const options = routes.view();

        expect( options.method ).toBe( 'GET' );
        expect( options.path ).toBe( `${routes.endpoint}/{id}` );
        expect( options.config.handler ).not.toBeUndefined();
        expect( options.config.validate.params.id ).not.toBeUndefined();
    } );

    it( 'should expose create()', () => {
        const options = routes.create();

        expect( options.method ).toBe( 'POST' );
        expect( options.path ).toBe( routes.endpoint );
        expect( options.config.handler ).not.toBeUndefined();
        expect( options.config.validate ).not.toBeUndefined();
    } );

    it( 'should expose update()', () => {
        const options = routes.update();

        expect( options.method ).toBe( 'PUT' );
        expect( options.path ).toBe( `${routes.endpoint}/{id}` );
        expect( options.config.handler ).not.toBeUndefined();
        expect( options.config.validate.params.id ).not.toBeUndefined();
    } );

    it( 'should expose remove()', () => {
        const options = routes.remove();

        expect( options.method ).toBe( 'DELETE' );
        expect( options.path ).toBe( `${routes.endpoint}/{id}` );
        expect( options.config.handler ).not.toBeUndefined();
        expect( options.config.validate.params.id ).not.toBeUndefined();
    } );
} );
