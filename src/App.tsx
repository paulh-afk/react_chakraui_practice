import * as React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';

export const App = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            Item 1
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>Hello, item1!</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            Item 2
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit atque at deserunt
          consequatur expedita delectus laborum, sed aperiam. Pariatur vitae eaque veniam quasi quia
          dicta distinctio necessitatibus ut dolor numquam.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            Item 3
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cum id fugit nihil
          inventore eos enim laborum iure accusantium, eum alias quasi, reiciendis nesciunt
          officiis! Voluptates quae dignissimos non dicta. Dolores aliquam eveniet ipsum
          perferendis, unde nulla iusto, alias sit quidem maiores corrupti distinctio, voluptas sunt
          aliquid. Neque, odio. Iste doloremque libero ullam eaque distinctio officia odit inventore
          magnam explicabo? Voluptas praesentium porro libero, sequi voluptatem amet deleniti
          cupiditate animi repellat vel nobis obcaecati repudiandae repellendus numquam similique
          est, atque tempora provident eligendi illo. Molestiae quidem quia assumenda consectetur
          iste.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
