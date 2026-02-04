"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, Text } from "@once-ui-system/core";

import { display, person } from "@/resources";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            {/* --- RELÓGIO (EXISTENTE) --- */}
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}

              {/* Divisor Vertical entre Status e Relógio */}
              <Line vert height="24" background="neutral-medium" />
            </Flex>
            
            {/* --- WIDGET SYSTEM STATUS (NOVO) --- */}
            {/* Oculto em mobile (s={{ hide: true }}) para não quebrar o layout */}
            <Flex vertical="center" gap="12" s={{ hide: true }}>
              <div className={styles.statusDot} />
              
              <Flex direction="column" gap="4">
                <Text variant="code-default-xs" onBackground="neutral-strong" style={{ lineHeight: '1', fontWeight: 600 }}>
                  OPERATIONAL
                </Text>
                <Text variant="code-default-xs" onBackground="neutral-weak" style={{ fontSize: '10px', lineHeight: '1' }}>
                  uptime: 99.9%
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};

export default Header;