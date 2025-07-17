import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Grid from "@mui/material/Grid";
export default function Training() {
  const [lastClickedItem, setLastClickedItem] = React.useState(null);

  return (
    <Grid container spacing={2}>
      <Grid size={3}>
        <Stack spacing={2}>
          {/* <Typography>
            {lastClickedItem == null
              ? "No item click recorded"
              : `Last clicked item: ${lastClickedItem}`}
          </Typography> */}
          <Box sx={{ minHeight: 352, minWidth: 300 }}>
            <SimpleTreeView
              onItemClick={(event, itemId) => setLastClickedItem(itemId)}
            >
              <TreeItem itemId="HTML" label="HTML">
                <TreeItem
                  itemId="HTML-Introduction"
                  label="HTML Introduction"
                />
                <TreeItem itemId="HTML-Basics" label="HTML Basics" />
                <TreeItem itemId="Elements" label="Elements" />
              </TreeItem>
              <TreeItem itemId="CSS" label="CSS">
                <TreeItem itemId="CSS-Introduction" label="CSS Introduction" />
                <TreeItem itemId="CSS-Syntax" label="CSS Syntax" />
              </TreeItem>
              <TreeItem itemId="Javascript" label="Javascript">
                <TreeItem
                  itemId="Javascript-Introduction"
                  label="JS Introduction"
                />
              </TreeItem>
              <TreeItem itemId="SQL" label="SQL">
                <TreeItem itemId="SQL Introduction" label="SQL Introduction" />
              </TreeItem>
            </SimpleTreeView>
          </Box>
        </Stack>
      </Grid>
      <Grid size={9}>
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {lastClickedItem}
        </Typography>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. {lastClickedItem} It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, {lastClickedItem} looked up one of
          the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, {lastClickedItem} making this the first true
          generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
          is therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
      </Grid>
    </Grid>
  );
}
