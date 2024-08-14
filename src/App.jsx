import * as C from '@chakra-ui/react'
import { useState } from 'react'
import Step from './components/Step'


function App() {
 const [step, setStep] = useState(1)
 const Steps =[1,2,3]
  return (
    <C.Flex h="100vh" align="center" justify="center">
      <C.Center maxW={500} w="100%" py={11} px={2} flexDirection="column">

      <C.HStack spacing={4}>
      {Steps.map((item) => (
        <Step key={item} index={item} active={step===item}/>
        ))}
      </C.HStack>

      <C.Divider my={4} borderColor="blue.800"></C.Divider>



      <C.HStack spacing={10} mt={4}>

        <C.Button bg="gray.200"
        onClick={() => step !==1 &&  setStep(step-1)}
        disabled={step===1}
        > Voltar
        </C.Button>

        <C.Button bg="green"
        onClick={() => step !==3 && setStep(step+1)}
        >
        {step===3 ? "Enviar":"Próximo"}
        </C.Button>

      </C.HStack>
      </C.Center>
    </C.Flex>
  )
}

export default App
