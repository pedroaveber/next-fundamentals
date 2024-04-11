describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to browse to the produt page and add it to the cart', () => {
    cy.get('a[href^="/products"]').first().click()

    cy.location('pathname').should('include', '/products')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should not add count duplicated products on cart', () => {
    cy.get('a[href^="/products"]').first().click()

    cy.location('pathname').should('include', '/products')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.get('input[name="q"]').type('moletom').parent('form').submit()

    cy.get('a[href^="/products"]').first().click()
    cy.location('pathname').should('include', '/products')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })
})
