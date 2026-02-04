import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Accordion,
  Flex,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.certs.title,
      display: about.certs.display,
      items: about.certs.categories.map((institution) => institution.title),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.projects.title,
      display: about.projects.display,
      items: about.projects.items.map((project) => project.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Flex radius="full" overflow="hidden">
              <img
                src={person.avatar}
                alt={person.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Flex>
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >

            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl" className={styles.textAlign}>
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m" className={styles.textAlign}>
                {about.work.title}
              </Heading>
              <Column fillWidth gap="xl" marginBottom="xl">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    
                    <Row horizontal="between" vertical="center" marginY="l">
                      <Column horizontal="start" vertical="start">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="body-default-l" onBackground="brand-weak" marginBottom="m">
                          {experience.role}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                          style={{ marginTop: -10 }}
                        >
                          {experience.timeframe}
                        </Text>
                      </Column>
                    </Row>
                    
                    <Column gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                            className={styles.textAlign}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="l" className={styles.textAlign}>
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="xl" marginBottom="xl" className={styles.textAlign}>
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.certs?.display && (
            <>
              <Heading as="h2" id={about.certs.title} variant="display-strong-s" marginBottom="xl" className={styles.textAlign}>
                {about.certs.title}
              </Heading>
              <Column fillWidth gap="4" marginBottom="xl" >
                {about.certs.categories.map((category, index) => (
                  <Accordion key={index} title={category.title} style={{ marginLeft: -15 }}>
                    <Column as="ul" gap="8" paddingBottom="m">
                      {category.items.map((item, i) => (
                        <Text as="li" key={i} variant="body-default-m" onBackground="neutral-weak">
                          {item.name}
                        </Text>
                      ))}
                    </Column>
                  </Accordion>
                ))}
              </Column>
            </>
          )}
          {about.projects.display && (
            <>
              <Heading 
                as="h2" 
                id={about.projects.title} 
                variant="display-strong-s" 
                marginBottom="m" 
                className={styles.textAlign}
              >
                {about.projects.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="xl">
                {about.projects.items.map((project: any, index: number) => (
                  <Column 
                    key={`${project.title}-${index}`} 
                    fillWidth 
                    border="neutral-medium" 
                    radius="l" 
                    padding="l"
                    background="neutral-weak" 
                  >
                    {/* Cabeçalho do Card */}
                    <Row horizontal="between" vertical="center" marginBottom="s">
  
                      {/* Agrupa Título e Tag na esquerda */}
                      <Row vertical="center" gap="8">
                        <Text id={project.title} variant="heading-strong-l">
                          {project.title}
                        </Text>
                        
                        {/* RENDERIZAÇÃO CONDICIONAL DA TAG */}
                        {project.comingSoon && (
                          <Tag size="m" variant="neutral" prefixIcon="time">
                            Em breve
                          </Tag>
                        )}
                      </Row>

                      {project.link && (
                        <IconButton
                          href={project.link}
                          icon="arrow-up-right"
                          variant="tertiary"
                          tooltip="Ver Projeto"
                        />
                      )}
                    </Row>

                    {/* Descrição */}
                    <Text 
                      variant="body-default-m" 
                      onBackground="neutral-medium" 
                      marginBottom="m"
                      className={styles.textAlign}
                    >
                      {project.description}
                    </Text>

                    {/* Tech Stack (Tags) */}
                    {project.techStack && project.techStack.length > 0 && (
                      <Row wrap gap="8" vertical="center">
                        {project.techStack.map((tech: string, techIndex: number) => (
                          <Tag 
                            key={`${project.title}-${techIndex}`} 
                            size="m" 
                            variant="neutral"
                          >
                            {tech}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="xl"
                className={styles.textAlign}
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="xl" className={styles.textAlign}>
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="m">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}