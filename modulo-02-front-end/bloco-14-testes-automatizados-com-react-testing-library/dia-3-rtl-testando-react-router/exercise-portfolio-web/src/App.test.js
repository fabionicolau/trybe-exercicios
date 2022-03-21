import React from 'react';
import App from './App';
import renderWithRouter from './helpers/renderWithRouter'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('1 - Testa se o clique em cada rota renderiza os textos esperados na tela.', () => {

  test('testa se ao clicar em "sobre", o texto exibido na tela está correto', () => {
    renderWithRouter(<App />)
    const linkAbout = screen.getByRole('link', { name: /sobre/i })
    userEvent.click(linkAbout)
    const textAbout = screen.getByText(/about/i)
    expect(textAbout).toBeInTheDocument()
  })


  test('testa se ao clicar em "projetos", o texto exibido na tela está correto', () => {
    renderWithRouter(<App />)
    const linkProjects = screen.getByRole('link', { name: /projetos/i })
    userEvent.click(linkProjects)
    const textProjects = screen.getByText(/projects/i)
    expect(textProjects).toBeInTheDocument()
  })

  test('testa se ao clicar em "Contato", o texto exibido na tela está correto', () => {
    renderWithRouter(<App />)
    const linkContact = screen.getByRole('link', { name: /contato/i })
    userEvent.click(linkContact)
    const textContact = screen.getByText(/contact/i)
    expect(textContact).toBeInTheDocument()
  })
});

describe('2 - Testa com o histórico que as urls corretas são acessadas após cada clique.', () => {

  test('Testa se ao clicar em "sobre", a url apresenta a rota correta', () => {
    const { history } = renderWithRouter(<App />)
    const linkAbout = screen.getByRole('link', { name: /sobre/i })
    userEvent.click(linkAbout)
    expect(history.location.pathname).toEqual('/sobre')
  })

  test('Testa se ao clicar em "projetos", a url apresenta a rota correta', () => {
    const { history } = renderWithRouter(<App />)
    const linkProjects = screen.getByRole('link', { name: /projetos/i })
    userEvent.click(linkProjects)
    expect(history.location.pathname).toEqual('/projetos')
  })

  test('Testa se ao clicar em "contato", a url apresenta a rota correta', () => {
    const { history } = renderWithRouter(<App />)
    const linkContact = screen.getByRole('link', { name: /contato/i })
    userEvent.click(linkContact)
    expect(history.location.pathname).toEqual('/contato')
    screen.getByRole('img',)
  })

})






