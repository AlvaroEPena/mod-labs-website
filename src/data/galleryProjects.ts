export type GalleryProjectCopy = {
  /** Shown above the carousel (replaces "PROJECT 3") */
  title: string;
  /** Shown once under the carousel */
  caption: string;
};

export const galleryProjectCopy: Record<number, GalleryProjectCopy> = {
  1: {
    title: "Portable Handheld Wii (G-boy)",
    caption: "Project 1 — edit title and caption in src/data/galleryProjects.ts",
  },
  2: {
    title: "Portable Handheld Wii (G-Wii)",
    caption: "Project 2 — edit title and caption in src/data/galleryProjects.ts",
  },
  3: {
    title: "Compilation of RGH3",
    caption: "Here is a ton of RGH3 I have done to many slims. Dozens more unphotographed :)",
  },
  4: {
    title: "Custom Halo Edition Xbox",
    caption: "This was an Xbox I made a custom RGB layout for and added a bluetooth RGB controller to connect to phones. I flashed the sound chip to R2D2 and also change ring of light LEDs.",
  },
  5: {
    title: "Phat Xbox 360 Mod Chip Install",
    caption: "Just an example of a Matrix mod chip being installed.",
  },
  6: {
    title: "Slim Xbox 360 mod Chip Install",
    caption: "Ace mod chip and S-RGH was installed to save a failed attempt at RGH3 from customer.",
  },
  7: {
    title: "PS4 'Mod Chip' Installs",
    caption: "Internal Luck Fox Pico Mini is installed to run PPPwn without connecting anything externally.",
  },
  8: {
    title: "PS4 Controller Trace Repair",
    caption: "These traces were damaged from someones attempt at removing the soldered joysticks. I repaired them here and controller worked perfectly.",
  },
  9: {
    title: "Blue Yeti USB Port Replacement",
    caption: "Helped a friend out and replaced the very broken USB port (look at the pins in the picture).",
  },
  10: {
    title: "Lenovo Supervisor BIOS Password Bypass",
    caption: "Fun little project to install a different OS on a old laptop with a forgotten BIOS password. Decided to use my Pi Pico running Pico-Serprog and Flashrom CLI to dump, patch, and flash the BIOS password to fresh install a different OS.",
  },
  11: {
    title: "Switch OLED Kamikaze",
    caption: "This is one of my kamikaze mod chip installs on a OLED switch along with the new housing and joy-con shells.",
  },
};

export function getGalleryProjectCopy(projectId: number): GalleryProjectCopy {
  return (
    galleryProjectCopy[projectId] ?? {
      title: `Project ${projectId}`,
      caption: "",
    }
  );
}
