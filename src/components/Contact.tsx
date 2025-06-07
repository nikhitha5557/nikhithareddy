
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      type: "Email",
      value: "nikhitha5557@gmail.com",
      href: "mailto:nikhitha5557@gmail.com",
      icon: "📧"
    },
    {
      type: "Phone",
      value: "+91 9391632230",
      href: "tel:+919391632230",
      icon: "📱"
    },
    {
      type: "LinkedIn",
      value: "nikhitha-reddy-gottimukkula",
      href: "https://www.linkedin.com/in/nikhitha-reddy-gottimukkula-5553752a0",
      icon: "💼"
    },
    {
      type: "GitHub",
      value: "nikhitha5557",
      href: "https://github.com/nikhitha5557",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to bring your ideas to life with innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300">
                    <div className="text-2xl">{contact.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{contact.type}</h4>
                      <a 
                        href={contact.href}
                        target={contact.type === "LinkedIn" || contact.type === "GitHub" ? "_blank" : undefined}
                        rel={contact.type === "LinkedIn" || contact.type === "GitHub" ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Quick Response Guaranteed
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent projects 
                  or time-sensitive discussions, feel free to reach out via phone or LinkedIn 
                  for faster communication.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-background rounded-lg">
                    <div className="font-bold text-primary">&lt; 24hrs</div>
                    <div className="text-xs text-muted-foreground">Email Response</div>
                  </div>
                  <div className="p-3 bg-background rounded-lg">
                    <div className="font-bold text-green-600">Same Day</div>
                    <div className="text-xs text-muted-foreground">Phone/LinkedIn</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-bold text-foreground">Currently Available</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Open to new opportunities including internships, freelance projects, 
                  and collaborative work. Currently pursuing B.Tech while actively 
                  seeking hands-on experience in AI/ML and web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
