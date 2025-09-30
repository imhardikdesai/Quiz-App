import { Avatar, Box, chakra, Flex, Icon, SimpleGrid, keyframes } from '@chakra-ui/react';

const testimonials = [
    {
        name: 'Hardik Desai',
        role: 'Frontend Web Developer',
        content:
            'This quiz web app is built using React JS. It can allow the user to select the criteria for their quiz from a list of options. The user can then proceed to answer the questions in the quiz and their performance will be tracked and shown in the scoreboard. Moreover, the app can be designed to be responsive and user-friendly.',
        avatar:
            'https://avatars.githubusercontent.com/u/87645745?v=4',
    }
];

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function TestimonialCard(props) {
    const { name, role, content, avatar } = props;
    return (
        <Flex
            boxShadow={'2xl'}
            maxW={'740px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'2xl'}
            p={12}
            justifyContent={'space-between'}
            position={'relative'}
            bg={'#2a313c'}
            border={'1px solid'}
            borderColor={'#3d4654'}
            transition={'all 0.3s ease'}
            animation={`${fadeIn} 0.6s ease-out`}
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '2xl',
                borderColor: '#9F7AEA',
            }}
            _after={{
                content: '""',
                position: 'absolute',
                height: '21px',
                width: '29px',
                left: '35px',
                top: '-10px',
                backgroundSize: 'cover',
                backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
            }}
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '740px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
                bgGradient: 'linear(to-r, purple.600, pink.600)',
                opacity: 0.2,
            }}>
            <Flex
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}>
                <chakra.p
                    color={'#b8c1d3'}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'16px'}
                    lineHeight={'1.8'}
                    pb={6}>
                    {content}
                </chakra.p>
                <Flex align={'center'} gap={3}>
                    <Box
                        w={'4px'}
                        h={'40px'}
                        bgGradient={'linear(to-b, #9F7AEA, #D53F8C)'}
                        rounded={'full'}
                    />
                    <Box>
                        <chakra.p
                            fontFamily={'Work Sans'}
                            color={'white'}
                            fontWeight={'bold'}
                            fontSize={16}>
                            {name}
                        </chakra.p>
                        <chakra.span
                            fontFamily={'Inter'}
                            fontWeight={'medium'}
                            fontSize={'14px'}
                            color={'#9F7AEA'}>
                            {role}
                        </chakra.span>
                    </Box>
                </Flex>
            </Flex>
            <Avatar
                src={avatar}
                height={'90px'}
                width={'90px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
                border={'4px solid'}
                borderColor={'#3d4654'}
                transition={'all 0.3s ease'}
                _hover={{
                    borderColor: '#9F7AEA',
                    transform: 'scale(1.05)',
                }}
            />
        </Flex>
    );
}

export default function About() {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            pb={20}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            bg={'#212832'}
            position={'relative'}
            overflow={'hidden'}>

            <Box
                position={'absolute'}
                top={'10%'}
                left={'5%'}
                w={'300px'}
                h={'300px'}
                bgGradient={'radial(#9F7AEA, transparent)'}
                opacity={0.15}
                filter={'blur(60px)'}
                animation={`${float} 6s ease-in-out infinite`}
                pointerEvents={'none'}
            />
            <Box
                position={'absolute'}
                bottom={'10%'}
                right={'5%'}
                w={'400px'}
                h={'400px'}
                bgGradient={'radial(#D53F8C, transparent)'}
                opacity={0.15}
                filter={'blur(60px)'}
                animation={`${float} 8s ease-in-out infinite`}
                pointerEvents={'none'}
            />

            <Box
                width={{ base: 'full', sm: 'lg', lg: 'xl' }}
                margin={'auto'}
                animation={`${fadeIn} 0.8s ease-out`}
                px={4}>
                <Flex align={'center'} justify={'center'} gap={2} mb={2}>
                    <Box
                        w={'40px'}
                        h={'2px'}
                        bgGradient={'linear(to-r, transparent, #9F7AEA)'}
                    />
                    <chakra.h3
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        fontSize={14}
                        letterSpacing={'wider'}
                        textTransform={'uppercase'}
                        color={'#9F7AEA'}>
                        People love us
                    </chakra.h3>
                    <Box
                        w={'40px'}
                        h={'2px'}
                        bgGradient={'linear(to-l, transparent, #9F7AEA)'}
                    />
                </Flex>

                <chakra.h1
                    py={4}
                    fontSize={{ base: '40px', md: '56px' }}
                    fontFamily={'Work Sans'}
                    fontWeight={'black'}
                    bgGradient={'linear(to-r, #9F7AEA, #D53F8C)'}
                    bgClip={'text'}
                    lineHeight={'1.2'}>
                    Quiz Web App
                </chakra.h1>

                <chakra.h2
                    margin={'auto'}
                    width={{ base: '90%', md: '70%' }}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={{ base: '16px', md: '18px' }}
                    lineHeight={'1.6'}
                    color={'#8b95a8'}>
                    Test Your Knowledge with Fun Quizzes on Our Exciting Website!
                </chakra.h2>
            </Box>

            <SimpleGrid
                columns={{ base: 1, xl: 1 }}
                spacing={'20'}
                mt={16}
                mx={'auto'}
                px={4}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard {...cardInfo} key={index} index={index} />
                ))}
            </SimpleGrid>

            <Box animation={`${fadeIn} 1s ease-out 0.3s backwards`}>
                <Icon
                    viewBox="0 0 40 35"
                    mt={14}
                    boxSize={12}
                    color={'#9F7AEA'}
                    transition={'all 0.3s ease'}
                    animation={`${pulse} 2s ease-in-out infinite`}
                    _hover={{
                        transform: 'scale(1.2)',
                        color: '#D53F8C',
                    }}
                    cursor={'pointer'}>
                    <path
                        fill={'currentColor'}
                        d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
                    />
                </Icon>
            </Box>
        </Flex>
    );
}