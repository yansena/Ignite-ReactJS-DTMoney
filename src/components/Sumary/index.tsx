import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles';
import {useContext} from "react";
import { useTransactions} from "../../hooks/useTransactions";

export function Sumary(){
  const { transactions } = useTransactions();

  const sumary = transactions.reduce((acc, transactions) => {
    if(transactions.type === 'deposit'){
      acc.deposits += transactions.amount
      acc.total += transactions.amount
    } else {
      acc.withdraws += transactions.amount
      acc.total -= transactions.amount
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })
  return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(sumary.deposits)
                  }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>-
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(sumary.withdraws)
                  }
                </strong>
            </div>
            <div className="highlith-backgroud">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(sumary.total)
                  }
                </strong>
            </div>
        </Container>
    );
}
