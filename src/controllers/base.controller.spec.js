import { BaseController } from './base.controller';

//
// Tests
//
describe( 'Controller: Base', () => {
    let controller;
    const notFoundMsg = 'Not Found';
    const foo = {
        reply : res => {},
    };

    beforeEach( () => {
        controller = new BaseController( notFoundMsg );

        spyOn( foo, 'reply' );
        spyOn( controller.Boom, 'notFound' );
    } );

    it( 'should be defined', () => {
        expect( controller ).not.toBeUndefined();
        expect( controller.Boom ).not.toBeUndefined();
        expect( controller.notFoundMsg ).toBe( notFoundMsg );
    } );

    it( 'should have empty @notFoundMsg', () => {
        const ctrl = new BaseController();

        expect( ctrl.notFoundMsg ).toBe( '' );
    } );

    describe( 'replyOnResponse()', () => {
        it( 'should accept an array as response', () => {
            const response = [{
                msg : 'hello',
            }];

            controller.replyOnResponse( foo.reply, response );
            expect( foo.reply ).toHaveBeenCalledWith( response );
        } );

        it( 'should accept a positive integer as response', () => {
            const response = 1;

            controller.replyOnResponse( foo.reply, response );
            expect( foo.reply ).toHaveBeenCalledWith( response );
        } );

        it( 'should return Not Found', () => {
            const response = 'invalid response';

            controller.replyOnResponse( foo.reply, response );
            expect( foo.reply ).toHaveBeenCalled();
            expect( controller.Boom.notFound ).toHaveBeenCalledWith( notFoundMsg );
        } );
    } );
} );
