import { MainController } from './main.controller';

//
// Tests
//
describe( 'Controller: Main', () => {
    let controller;

    beforeEach( () => {
        controller = new MainController();
        spyOn( controller.Main, 'doHealthcheck' ).and.returnValue( Promise.resolve( {} ) );
    } );

    it( 'should be defined', () => {
        expect( controller ).not.toBeUndefined();
    } );

    it( 'should expose healthcheck()', () => {
        controller.healthcheck();
        expect( controller.Main.doHealthcheck ).toHaveBeenCalled();
    } );
} );
