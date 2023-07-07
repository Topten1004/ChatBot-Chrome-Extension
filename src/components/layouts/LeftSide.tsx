import React from 'react';
import { BottomContainer, Container, ExtraFaq, NewChat, QueDiv, QueGroup, SortButton, SortKind } from './styles/LeftSide.styles';
import { FiPlus, FiTriangle } from 'react-icons/fi';
import { BiCube, BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { PiSquareLight } from 'react-icons/pi';
import { FaStarOfDavid } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import _Text from '../../shared/core/ui/Text';

const LeftSide = () => {

  const bottomFaqs = [
    {
      icon: <PiSquareLight color='red' size={20} />,
      label: "Inserisci la chiave di licenza"
    },
    {
      icon: <FiTriangle color='red' size={20} />,
      label:"politica sulla riservatezza"
    },
    {
      icon: <FaStarOfDavid color='red' size={20} />,
      label:"Termini di servizio"
    },
    {
      icon: <AiOutlineHeart color='red' size={20} />,
      label: "accesso professionale ai"
    }
  ];

  return (
    <Container>
      <NewChat>
        <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FiPlus color='white' size={20} />
          <_Text text='nuovo' size={16} transform='capitalize' />
        </div>
        <_Text text='attività' size={16} transform='capitalize' />
      </NewChat>
      <SortKind>
        <SortButton><_Text text='ordinare per data' size={14} transform='capitalize' /></SortButton>
        <SortButton><_Text text='ordina per argomento' size={14} transform='capitalize' /></SortButton>
      </SortKind>
      <QueGroup>
        {
          [...Array(3)].map(_ => (
            <QueDiv>
              <BiCube color='white' size={20} />
              <_Text text='sto parlando dei principi contabili' />
              <BiEdit color='white' size={20} />
              <MdDelete color='white' size={20} />
            </QueDiv>
          ))
        }
      </QueGroup>
      <BottomContainer>
        {
          bottomFaqs.map((faq, index) => (
            <ExtraFaq key={index}>
              { faq.icon }
              <_Text text={faq.label} />
            </ExtraFaq>
          ))
        }
      </BottomContainer>
    </Container>
  )
}

export default LeftSide;