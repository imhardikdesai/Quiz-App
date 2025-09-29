import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  // useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import logo from './../../Assets/logo.png';
import { Link as ReachLink, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function BetterNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  
  const NavLink = ({ to, icon: Icon, children }) => {
    const isActive = location.pathname === to;
    
    return (
      <ReachLink to={to}>
        <Box
          px={4}
          py={1}
          borderRadius="xl"
          position="relative"
          cursor="pointer"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            bg: 'whiteAlpha.200',
            transform: 'translateY(-2px)',
            shadow: 'lg'
          }}
          _active={{
            transform: 'translateY(0px)'
          }}
          bg={isActive ? 'whiteAlpha.200' : 'transparent'}
          _before={{
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isActive ? '80%' : '0%',
            height: '2px',
            bg: 'linear-gradient(90deg, #667eea, #764ba2)',
            borderRadius: 'full',
            transition: 'width 0.3s ease'
          }}
        >
          <HStack spacing={3}>
            <Box
              color={isActive ? 'blue.300' : 'whiteAlpha.800'}
              transition="all 0.3s ease"
              _groupHover={{ color: 'blue.300' }}
            >
              <Icon size={18} />
            </Box>
            <Text 
              fontWeight="semibold" 
              color={isActive ? 'white' : 'whiteAlpha.900'}
              fontSize="md"
              transition="all 0.3s ease"
            >
              {children}
            </Text>
          </HStack>
        </Box>
      </ReachLink>
    );
  };

  return (
    <>
      <Box
        bg="rgba(33, 40, 50, 0.95)"
        backdropFilter="blur(10px)"
        px={10}
        borderBottom="1px solid"
        borderColor="whiteAlpha.200"
        position="sticky"
        top={0}
        zIndex={1000}
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
      >
        <Flex h={55} alignItems="center" justifyContent="space-between">
          {/* Mobile Menu Button */}
          <IconButton
            bg="transparent"
            color="whiteAlpha.800"
            _hover={{
              bg: 'whiteAlpha.200',
              color: 'white',
              transform: 'scale(1.1)'
            }}
            _active={{
              transform: 'scale(0.95)'
            }}
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            borderRadius="xl"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          />

          <HStack spacing={8} alignItems="center">
            {/* Logo with cool hover effect */}
            <ReachLink to="/">
              <Box
                position="relative"
                _hover={{
                  transform: 'scale(1.05)',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                cursor="pointer"
              >
                <Avatar 
                  size="md" 
                  src={logo} 
                  w={12} 
                  h={12}
                  ring={2}
                  ringColor="transparent"
                  _hover={{
                    ringColor: 'blue.400'
                  }}
                  transition="all 0.3s ease"
                />
                <Box
                  position="absolute"
                  inset={0}
                  borderRadius="full"
                  bg="linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.3), transparent)"
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  transition="opacity 0.3s ease"
                />
              </Box>
            </ReachLink>

            {/* Desktop Navigation */}
            <HStack as="nav" spacing={2} display={{ base: 'none', md: 'flex' }}>
              <NavLink to="/" icon={FaHome}>
                Home
              </NavLink>
              <NavLink to="/about" icon={InfoIcon}>
                About
              </NavLink>
            </HStack>
          </HStack>
        </Flex>

        {/* Mobile Menu with slide animation */}
        <Box
          display={{ md: 'none' }}
          overflow="hidden"
          maxH={isOpen ? "200px" : "0"}
          transition="max-height 0.3s ease-in-out"
        >
          <Stack 
            as="nav" 
            spacing={2} 
            pb={isOpen ? 4 : 0}
            transform={isOpen ? "translateY(0)" : "translateY(-20px)"}
            opacity={isOpen ? 1 : 0}
            transition="all 0.3s ease"
          >
            <Box
              onClick={onClose}
              _hover={{
                bg: 'whiteAlpha.100'
              }}
              borderRadius="xl"
              transition="all 0.3s ease"
            >
              <NavLink to="/" icon={FaHome}>
                Home
              </NavLink>
            </Box>
            <Box
              onClick={onClose}
              _hover={{
                bg: 'whiteAlpha.100'
              }}
              borderRadius="xl"
              transition="all 0.3s ease"
            >
              <NavLink to="/about" icon={InfoIcon}>
                About
              </NavLink>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}