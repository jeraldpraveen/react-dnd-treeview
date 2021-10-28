import React, { useState } from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { Tree } from "@minoru/react-dnd-treeview";
import { CustomNode } from "./CustomNode";
import { CustomDragPreview } from "./CustomDragPreview";
import { theme } from "./theme";
import styles from "./App.module.css";
import SampleData from "./sample_data.json";
import { ListContainer, ListItem } from "./styles";
import "./App.css";

function App() {
  const [treeData, setTreeData] = useState(SampleData);
  const handleDrop = (newTree) => setTreeData(newTree);

  return (
    <ListContainer>
      <h1 className="App">Team Structure</h1>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseLine />
          <ListItem>
            <div className={styles.app}>
              <Tree
                tree={treeData}
                rootId={0}
                render={(node, { depth, isOpen, onToggle }) => (
                  <CustomNode
                    node={node}
                    depth={depth}
                    isOpen={isOpen}
                    onToggle={onToggle}
                  />
                )}
                dragPreviewRender={(monitorProps) => (
                  <CustomDragPreview monitorProps={monitorProps} />
                )}
                onDrop={handleDrop}
                classes={{
                  root: styles.treeRoot,
                  draggingSource: styles.draggingSource,
                  dropTarget: styles.dropTarget,
                }}
              />
            </div>
          </ListItem>
        </ThemeProvider>
      </StylesProvider>
    </ListContainer>
  );
}

export default App;
