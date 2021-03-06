import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Flex, SimpleGrid, Box, Text, theme, Spinner } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import { useState, useEffect } from 'react'

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)

export default function Dashboard() {
  const [isChartLoaded, setIsChartLoaded] = useState(false)

  useEffect(() => {
    setIsChartLoaded(true)
  }, [])

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2022-04-20T00:00:00.000Z',
        '2022-04-21T00:00:00.000Z',
        '2022-04-22T00:00:00.000Z',
        '2022-04-23T00:00:00.000Z',
        '2022-04-24T00:00:00.000Z',
        '2022-04-25T00:00:00.000Z',
        '2022-04-26T00:00:00.000Z'
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  }

  const series = [
    {
      name: 'series1',
      data: [80, 45, 80, 60, 29, 44]
    }
  ]

  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' maxWidth={1480} my='6' mx='auto' px='6'>
        <Sidebar />

        <SimpleGrid flex='1' minChildWidth='320px' spacing='4' alignItems='flex-start'>
          <Box p={['6', '8']} pb='4' bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
            { isChartLoaded ? (
              <Chart
                options={options}
                series={series}
                type='area'
                height='160'
              />
            ) : (
              <Spinner mt='4' thickness='4px' speed='0.65s' emptyColor='gray.200' color='pink.500' size='xl' />
            ) }
            
          </Box>
          <Box p={['6', '8']} pb='4' bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
            { isChartLoaded ? (
              <Chart
                options={options}
                series={series}
                type='area'
                height='160'
              />
            ) : (
              <Spinner mt='4' thickness='4px' speed='0.65s' emptyColor='gray.200' color='pink.500' size='xl' />
            ) }
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}