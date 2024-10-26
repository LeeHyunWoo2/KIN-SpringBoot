import "@/styles/globals.css";
import Layout from '@/components/Layout';
import { ToastProvider } from "@/components/ui/toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem, ContextMenuTrigger,
} from "@/components/ui/context-menu";

function App({ Component, pageProps }) {

  return (
      <>
        <ContextMenu>
          <ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Profile</ContextMenuItem>
              <ContextMenuItem>Billing</ContextMenuItem>
              <ContextMenuItem>Team</ContextMenuItem>
              <ContextMenuItem>Subscription</ContextMenuItem>
            </ContextMenuContent>

        <SidebarProvider>
          <ToastProvider>
            <TooltipProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </TooltipProvider>
          </ToastProvider>
        </SidebarProvider>
          </ContextMenuTrigger>
        </ContextMenu>
      </>
  );
}

export default App;
