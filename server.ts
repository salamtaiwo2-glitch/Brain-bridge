import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Handle student registration
  app.post("/api/register", (req, res) => {
    const data = req.body;
    console.log("Received new student registration:", data);
    
    // Simulate processing time and database save
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: "Registration successful", 
        studentId: "BB-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000)
      });
    }, 1500);
  });

  // Fetch student profile data
  app.get("/api/profile", (req, res) => {
    // Simulate database fetch
    setTimeout(() => {
      res.json({
        name: "Alex Johnson",
        id: "BB-2024-8901",
        email: "alex.johnson@student.brainbridge.edu",
        phone: "+1 (555) 987-6543",
        dob: "May 15, 2002",
        address: "456 College Ave, Apt 4B, Knowledge City, KC 10002",
        program: "B.Sc. Computer Science",
        year: "Junior (Year 3)",
        gpa: "3.85",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
        currentCourses: [
          { code: "CS301", name: "Data Structures & Algorithms", credits: 4, grade: "A" },
          { code: "CS305", name: "Database Management Systems", credits: 3, grade: "A-" },
          { code: "MATH210", name: "Linear Algebra", credits: 3, grade: "B+" },
          { code: "ENG201", name: "Technical Writing", credits: 2, grade: "A" }
        ]
      });
    }, 800);
  });

  // Handle student logout
  app.post("/api/logout", (req, res) => {
    // Simulate session destruction
    setTimeout(() => {
      res.json({ success: true, message: "Logged out successfully" });
    }, 500);
  });

  // Handle student login
  app.post("/api/login", (req, res) => {
    setTimeout(() => {
      res.json({ success: true, message: "Logged in successfully" });
    }, 800);
  });

  // Handle profile settings update
  app.put("/api/profile/settings", (req, res) => {
    const { email, phone, address } = req.body;
    // In a real app, update the database here
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: "Settings updated successfully",
        data: { email, phone, address }
      });
    }, 800);
  });

  // Fetch research center data
  app.get("/api/research", (req, res) => {
    setTimeout(() => {
      res.json({
        laboratories: [
          {
            name: "Advanced Materials Lab",
            description: "State-of-the-art facility for material synthesis and characterization.",
            image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            equipment: ["Scanning Electron Microscope (SEM)", "X-Ray Diffractometer (XRD)", "Atomic Force Microscope (AFM)"]
          },
          {
            name: "Quantum Computing Center",
            description: "Dedicated to the development of next-generation quantum algorithms and hardware.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            equipment: ["Dilution Refrigerator", "Superconducting Qubit Array", "Microwave Synthesizers"]
          }
        ],
        library: {
          exterior: {
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "The Central Research Library features a modern, sustainable architectural design."
          },
          interior: {
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Over 2 million physical volumes and access to 500+ premium scientific databases."
          }
        },
        biotechnology: {
          title: "Biotechnology Collaboration Group",
          description: "Partnering with industry leaders to solve global health and environmental challenges.",
          projects: ["CRISPR-Cas9 Gene Editing", "Synthetic Biology for Biofuels", "Personalized Medicine Genomics"],
          contact: "biotech@brainbridge.edu"
        },
        nanotechnology: {
          title: "Nanotechnology Research Section",
          description: "Exploring the manipulation of matter on an atomic, molecular, and supramolecular scale.",
          focusAreas: ["Nanomedicine", "Nanoelectronics", "Nanomaterials for Energy Storage"],
          image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      });
    }, 600);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
