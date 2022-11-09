import React from 'react'
import './shoppingCart.css'
import { Heart,BinIcon, ArrowDown } from '../../Icons';


export default function ShoppingCart() {

    return (
        <>
            <div className="pgina-de-shoppingcart">
                <div className="resumo-top-div">
                    <div className="shopping-cart-div">
                        <p className="summary-p">Shopping Cart</p>
                    </div>

                    <div className="items-60">
                        <span className='span'>2 items</span>
                        <span className="span"> | 60€</span>
                    </div>
                </div> 
                


                <div className="item1-div">
                    <div className="conteudo-item1-div">
                        <div className="icons-heart-bin">
                            <Heart />
                            <BinIcon />
                        </div>

                        <div className="img-item2-div">
                            <img
                            className="slidesplash-755x470-icon"
                            alt=""
                            src="https://contes-toten-api.herokuapp.com/passeio/get/2"
                            />
                        </div>

                        <b className="slide-splash-30">Zoo de Lagos 30€</b>

                        <div className="data-30112022-div">Data: 31/11/2022</div>

                        <div className="quantidade-div">
                            <div className="quantidade-1-div">Quantidade: 
                            {/* <ArrowDown /> */}
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="item2-div">
                    <div className="conteudo-item2-div">
                        <div className="icons">
                            <Heart />
                            <BinIcon />
                        </div>

                        <div className="img-item2-div">
                            <img
                            className="slidesplash-755x470-icon"
                            alt=""
                            src="https://contes-toten-api.herokuapp.com/passeio/get/4"
                            />
                        </div>

                        <b className="slide-splash-30">Slide Splash 30€</b>

                        <div className="data-30112022-div">Data: 30/11/2022</div>

                        <div className="quantidade-div">
                            <div className="quantidade-1-div">Quantidade: 
                            {/* <ArrowDown /> */}
                            <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="summary-div">
                    <b className="summary-b">
                        <p className="summary-p">Summary</p>
                    </b>
                    <div className="conteudo-summary-div">
                        <div className="promo-code-div">
                            <div className="do-you-have-a-promo-code">
                            Do you have a promo code?
                            </div>
                            <img
                            className="dashiconsarrow-down-alt2"
                            alt=""
                            src="../dashiconsarrowdownalt2.svg"
                            />
                        </div>

                        <div className="subtotal-div">
                            <div className="subtotal-div1">
                            <span className="subtotal-span">Subtotal</span>
                            <b>{`: `}</b>
                            </div>
                            <div className="div">60€</div>
                        </div>

                        <div className="taxes-div">
                            <div className="total-div1">Taxes:</div>
                            <div className="div">0€</div>
                        </div>

                        <div className="total-div">
                            <div className="total-div1">{`Total: `}</div>
                            <div className="div">60€</div>
                        </div>



                        <div className="redirect-div">
                            <div className='continuar-compra'>
                                <a href="/" className="continuar-compra-link">Continuar compra</a>
                            </div>
                            
                            <div className='finalizar-compra'>
                                <a href="/checkout" className="finalizar-compra-link">Finalizar compra</a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
  );
}



