
describe('Тестирование login.qa.studio', function () {
    
    it('1.1. Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.product_title').contains('БРОММС Двухместная кровать');
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(3000);
        cy.get('#cart-modal > .off-modal-layer').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.product_title').contains('КЛЛАРИОН Низкий столик');
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(3000);
        cy.get('#cart-modal > .off-modal-layer').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.header-right-items > .header-cart > a > .razzi-svg-icon > svg').click();
        cy.get('.checkout').click();
        cy.get('.page-header__title').contains('Оформение заказа');
        cy.get('#billing_first_name').type('Иван');
        cy.get('#billing_last_name').type('Иванов');
        cy.get('#billing_company').type('физ.лицо');
        cy.get('#billing_address_1').type('Тимерязевская улица, дом №10');
        cy.get('#billing_address_2').type('2 подъезд, 8 этаж');
        cy.get('#billing_city').type('Москва');
        cy.get('#billing_state').type('Москва');
        cy.get('#billing_postcode').type('127106');
        cy.get('#billing_phone').type('+79995685639');
        cy.get('#billing_email').type('ivanov@mail.ru');
        cy.get('#order_comments').type('Обязательно позвонить за час до доставки');
        cy.get('#place_order').click();
        cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
        })

})
