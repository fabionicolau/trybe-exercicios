import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import responseAPI from './mocks';

describe('Test Rick & Morty API', () => {

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseAPI)
    })
    // global.fetch = async () => ({
    //   json: async () => responseAPI,
    // })
  })

  test('Verifica se aparece o card com titulo de "Rick Sanchez"', async () => {
    render(<App />)
    const loading = screen.getByText(/carregando.../i)
    await waitForElementToBeRemoved(loading)

    const cardRickSanchez = screen.getByRole('heading', { name: /rick sanchez/i, level: 3 })
    expect(cardRickSanchez).toBeInTheDocument()
  })

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    render(<App />)
    const inputText = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /buscar/i })
    expect(inputText).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('Verifica se ao buscar por "Smith" aparecem apenas 4 cards', async () => {
    render(<App />)
    const inputText = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: 'Buscar' })
    userEvent.type(inputText, 'Smith')
    userEvent.click(button)
    const smithFilter = await screen.findAllByText(/smith/i)
    expect(smithFilter).toHaveLength(4)
  })
})