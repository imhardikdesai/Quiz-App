import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import logo from './../../Assets/logo.png';
import { Link as ReachLink, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionIconButton = motion(IconButton);

export default function BetterNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const NavLink = ({ to, icon: Icon, children, onClick }) => {
    const isActive = location.pathname === to;

    return (
      <ReachLink to={to} onClick={onClick}>
        <MotionBox
          px={4}
          py={2}
          borderRadius="xl"
          position="relative"
          cursor="pointer"
          bg={isActive ? 'whiteAlpha.200' : 'transparent'}
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <HStack spacing={3}>
            <MotionBox
              color={isActive ? 'blue.300' : 'whiteAlpha.800'}
              animate={{
                rotate: isActive ? [0, -10, 10, -10, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <Icon size={18} />
            </MotionBox>
            <Text
              fontWeight="semibold"
              color={isActive ? 'white' : 'whiteAlpha.900'}
              fontSize="md"
            >
              {children}
            </Text>
          </HStack>

          {/* Active indicator */}
          {isActive && (
            <MotionBox
              position="absolute"
              bottom="-2px"
              left="50%"
              width="80%"
              height="2px"
              bgGradient="linear(90deg, #667eea, #764ba2)"
              borderRadius="full"
              initial={{ width: 0, x: '-50%' }}
              animate={{ width: '80%', x: '-50%' }}
              transition={{ duration: 0.3 }}
            />
          )}
        </MotionBox>
      </ReachLink>
    );
  };

  return (
    <>
      <MotionBox
        bg="rgba(33, 40, 50, 0.95)"
        backdropFilter="blur(10px)"
        px={10}
        borderBottom="1px solid"
        borderColor="whiteAlpha.200"
        position="sticky"
        top={0}
        zIndex={1000}
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <MotionIconButton
            bg="transparent"
            color="whiteAlpha.800"
            _hover={{
              bg: 'whiteAlpha.200',
              color: 'white',
            }}
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            borderRadius="xl"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9, rotate: -90 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Left side - Logo */}
          <HStack spacing={4}>
            <ReachLink to="/">
              <MotionBox
                cursor="pointer"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar
                  size="md"
                  src={logo}
                  w={12}
                  h={12}
                  ring={2}
                  ringColor="blue.400"
                  boxShadow="0 0 20px rgba(102, 126, 234, 0.5)"
                />
              </MotionBox>
            </ReachLink>
          </HStack>

          {/* Center - QUIZ APP Heading */}
          <MotionBox
            position="absolute"
            left="50%"
            display={{ base: 'none', sm: 'block' }}
            initial={{ x: '-50%', scale: 0.8, opacity: 0 }}
            animate={{ x: '-50%', scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MotionText
              as={Text}
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="black"
              bgGradient="linear(135deg, #667eea, #764ba2, #f093fb)"
              bgClip="text"
              letterSpacing="wider"
              textAlign="center"
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 20px rgba(102, 126, 234, 0.8)",
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              cursor="pointer"
            >
              QUIZ APP
            </MotionText>
          </MotionBox>

          {/* Right side - Navigation */}
          <MotionFlex
            as="nav"
            spacing={2}
            display={{ base: 'none', md: 'flex' }}
            gap={2}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <NavLink to="/" icon={FaHome}>
              Home
            </NavLink>
            <NavLink to="/about" icon={InfoIcon}>
              About
            </NavLink>
          </MotionFlex>
        </Flex>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              display={{ md: 'none' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              overflow="hidden"
            >
              <Stack
                as="nav"
                spacing={2}
                pb={4}
              >
                {/* Mobile QUIZ APP heading */}
                <MotionBox
                  textAlign="center"
                  py={2}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Text
                    fontSize="2xl"
                    fontWeight="black"
                    bgGradient="linear(135deg, #667eea, #764ba2, #f093fb)"
                    bgClip="text"
                    letterSpacing="wider"
                  >
                    QUIZ APP
                  </Text>
                </MotionBox>

                <MotionBox
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <NavLink to="/" icon={FaHome} onClick={onClose}>
                    Home
                  </NavLink>
                </MotionBox>

                <MotionBox
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <NavLink to="/about" icon={InfoIcon} onClick={onClose}>
                    About
                  </NavLink>
                </MotionBox>
              </Stack>
            </MotionBox>
          )}
        </AnimatePresence>
      </MotionBox>
    </>
  );
}

const MotionText = motion(Text);