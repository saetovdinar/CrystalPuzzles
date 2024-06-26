"""group

Revision ID: fdafdc487a17
Revises: bc559329b022
Create Date: 2024-04-10 13:41:16.391488

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'fdafdc487a17'
down_revision: Union[str, None] = 'bc559329b022'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('Groups', 'deleted',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('Groups', 'deleted',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###
