import React from "react";
import { render, screen, fireEvent} from '@testing-library/react'
import App from '../App'

describe('Testa o comportamento da aplicação', () => {
  beforeEach(() => {
    render(<App />)
  })

  test("verifica se a palavra 'Carregando...' é renderizada na tela quando a aplicação é iniciada.", () => {
    const loading = screen.getByText(/carregando.../i)
    expect(loading).toBeDefined()
  })

  test('verifica se o jogo com o texto Minecraft é renderizado na tela após a saída do carregando.', async () => {
    const mineCraft = await screen.findAllByText(/minecraft/i)
    expect(mineCraft).toBeDefined()
  })

  test('verifique se a tela de detalhes exibe as informações "Release Year" e "Sales", do jogo correspondente.', async () => {
    const details = await screen.findAllByText(/ver detalhes/i)
    expect(details).toBeDefined()
    fireEvent.click(details[1])
    const releaseYear = await screen.findByText(/release year/i)
    const sales = await screen.findByText(/sales/i)
    expect(releaseYear).toBeDefined()
    expect(sales).toBeDefined()
  })


  test('verifica se quando clicado no botão voltar na tela de detalhes após o carregando, é renderizada a lista de jogos.', async () => {
  const backward = await screen.findByText(/voltar/i)
  expect(backward).toBeDefined()
  fireEvent.click(backward)
  const mineCraft = await screen.findAllByText(/minecraft/i)
  const GTA = await screen.findAllByText(/grand theft auto/i)
  const superMario = await screen.findAllByText(/super mario world/i)
  expect(mineCraft).toBeDefined()
  expect(GTA).toBeDefined()
  expect(superMario).toBeDefined()
  })
})