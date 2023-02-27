import MainLayout from "Components/Layouts/MainLayout";
import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import ThemeText from "Components/Atoms/ThemeText";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import myPortfolio from "Assets/Data/myPortfolio";
import Icon from "Components/Atoms/Icon";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import Grid from "@mui/material/Unstable_Grid2";

interface ContactItemProps {
  icon: React.ReactElement;
  title: string;
  label: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  title,
  label,
  href = "",
}) => {
  return (
    <Box className="relative h-full flex items-center p-4 rounded-2xl bg-themeStatus-lighter">
      <Box
        sx={{
          "& svg": {
            fill: "var(--theme-bg-main)",
            width: "36px",
            height: "36px",
          },
        }}
      >
        {icon}
      </Box>
      <Box className="px-2 pl-4">
        <h3 className="text-themeStatus-bolder font-medium text-[1.1rem]">
          {title}
        </h3>
        {<p className="text-themeStatus-base mt-2">{label}</p>}
      </Box>
      {!!href && (
        <Box className="absolute top-0 left-0 w-full h-full">
          <a
            rel="noreferrer"
            className="block w-full h-full -indent-[1000px] text-themeStatus-base mt-2"
            href={href}
            target="_blank"
          >
            src
          </a>
        </Box>
      )}
    </Box>
  );
};

interface ContactListType {
  icon: React.ReactElement;
  title: string;
  label: string;
  href?: string;
}

const Contacts = () => {
  const contactList: ContactListType[] = [
    {
      icon: <LocationOnIcon />,
      title: "Address",
      label: myPortfolio.contacts.address,
      href: "https://goo.gl/maps/YnszpwBa5zcttJa99",
    },
    {
      icon: <Icon icons="contact" />,
      title: "Email",
      label: myPortfolio.contacts.email,
      href: `mailTo:${myPortfolio.contacts.email}`,
    },
    {
      icon: <FacebookIcon />,
      title: "Facebook",
      label: "Giang Đỗ",
      href: myPortfolio.contacts.socials.facebook.src,
    },
    {
      icon: <LocalPhoneIcon />,
      title: "Phone",
      label: myPortfolio.contacts.phone,
      href: `tel:${myPortfolio.contacts.phone}`,
    },
  ];

  const _renderContactList = useMemo(() => {
    return contactList.map((contact, index) => {
      return (
        <Grid xs={12} md={6}>
          <ContactItem
            icon={contact.icon}
            label={contact.label}
            title={contact.title}
            href={contact.href ?? ""}
            key={index}
          />
        </Grid>
      );
    });
  }, []);

  return (
    <MainLayout.ContentWrapper textOpacity="CONTACTS">
      <Box className="py-10">
        {/* Contact List */}
        <Box>
          <h3 className="text-themeStatus-bolder text-[1.4rem] font-medium">
            <ThemeText text="Get " />
            In Touch
          </h3>
          <Box className="mt-6">
            <Grid container spacing={4}>
              {_renderContactList}
            </Grid>
          </Box>
        </Box>
        {/* Contact List End */}
        {/* Map */}
        <Box className="mt-8 rounded-2xl overflow-hidden">
          <iframe
            title="My Address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.7301926657217!2d106.64543195662127!3d10.80349819162653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752945f0eda461%3A0x3c5f1b0a8472bba7!2zMzggQzEsIFBoxrDhu51uZyAxMywgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1677420898718!5m2!1svi!2s"
            width="100%"
            height={450}
            style={{ border: 1 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
        {/* Map */}
      </Box>
    </MainLayout.ContentWrapper>
  );
};

export default Contacts;
