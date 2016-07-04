import { BaseController } from './base.controller';


//
// Tests
//
describe( 'Controller: Base', () => {
  let controller;
  const notFoundMsg = 'Not Found';
  const foo = { reply : ( res ) => {} };

  beforeEach( () => {
    controller = new class _base extends BaseController {}( notFoundMsg );

    spyOn( foo, 'reply' );
    spyOn( controller.Boom, 'notFound' );
  } );

  it( 'should not instantiated directly', () => {
    const createBase = () => new BaseController();
    expect( createBase ).toThrow( Error( 'BaseController is an abstract class and cannot be instantiated directly' ) );
  } );

  it( 'should be defined', () => {
    expect( controller ).not.toBe( undefined );
    expect( controller.Boom ).not.toBe( undefined );
    expect( controller.notFoundMsg ).toBe( notFoundMsg );
  } );

  it( 'should have empty @notFoundMsg', () => {
    const ctrl = new class _base extends BaseController {};

    expect( ctrl.notFoundMsg ).toBe( '' );
  } );

  describe( 'replyOnResponse()', () => {
    it( 'should accept an array as response', () => {
      const response = [{ msg : 'hello' }];

      controller.replyOnResponse( response, foo.reply );
      expect( foo.reply ).toHaveBeenCalledWith( response );
    } );

    it( 'should accept a positive integer as response', () => {
      const response = 1;

      controller.replyOnResponse( response, foo.reply );
      expect( foo.reply ).toHaveBeenCalledWith( response );
    } );

    it( 'should return Not Found', () => {
      const response = 'invalid response';

      controller.replyOnResponse( response, foo.reply );
      expect( foo.reply ).toHaveBeenCalled();
      expect( controller.Boom.notFound ).toHaveBeenCalledWith( notFoundMsg );
    } );
  } );
} );
